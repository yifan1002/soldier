title Vue项目自动打包、压缩、FTP上传批处理工具
color 07
cls
@echo off

::常用变量设置
::获取当前目录
set root=%cd%
::FTP
set ftpUrl=192.168.11.236
set ftpPort=21
set ftpUser=anonymous
set ftpPwd=123
set ftpPath=/web/exstudy/1.0.0.0/app_sep
::WinRAR
rem 打包成zip格式文件就需要WinRAR.exe，不然会报"未知选项：afzip"
set rar=%ProgramFiles%\WinRAR\WinRAR.exe
::压缩包
set appName=exstudy_home
set appTerm=web
set appVer=1.0.0.0
set year=%date:~0,4%
set month=%date:~5,2%
set day=%date:~8,2%
set hour=%time:~0,2%
set minute=%time:~3,2%
set second=%time:~6,2%
::生产环境
set proAppEnv=release
set proName=%appName%-%appTerm%-%appVer%-%proAppEnv%-%year%%month%%day%-%hour%%minute%.zip
set proPath=%root%\dist
::测试环境
set testAppEnv=snapshot
set testName=%appName%-%appTerm%-%appVer%-%testAppEnv%-%year%%month%%day%-%hour%%minute%.zip
set testPath=%root%\test

:start
color 07
cls
echo. 
echo.
echo.  ┌────────────────────────────────────┐
echo.   
echo     vue+webpack 项目自动打包压缩批处理工具     
echo.
echo.
echo.
echo     功能说明：
echo.   
echo     1.vue+webpack项目自动打包
echo.   
echo.    2.分生产、测试和生产+测试三种打包模式
echo.
echo.    3.打包完成自动压缩为zip文件
echo.
echo.    4.生产和测试单模式打包完成，在资源管理器中自动打开当前文件夹
echo.  
echo.    5.打包完成上传压缩包到FTP指定目录
echo.
echo.
echo.  └────────────────────────────────────┘
echo.
pause

:menu
color 07
cls
echo.
echo.  ┌────────────────────────────────────┐
echo.
echo.    请选择打包模式
echo.
echo.
echo.    1. 生产+测试环境打包+上传FTP
echo.
echo.    2. 生产环境打包+上传FTP
echo.
echo.    3. 测试环境打包+上传FTP
echo.
echo  └────────────────────────────────────┘
echo.
echo.
set /p user_input=请输入:
if %user_input% equ 1 goto pro+test
if %user_input% equ 2 goto production
if %user_input% equ 3 goto test
pause
goto menu

:pro+test
title 即将进行生产+测试环境打包+上传FTP
cls
color 17
goto pro+test--pro
:pro+test--pro
echo.  即将进行生产环境打包，请稍后。。。
cls
color 17
echo.  
call npm run build
rem 返回代码为>=1就跳至标题1处执行压缩，>=0就跳至标题exit处执行终止
IF ERRORLEVEL 1 (
    echo  打包出错了，快去看看怎么回事吧！！！
    echo.  
    goto start
)
IF ERRORLEVEL 0 (
    echo  打包完成，自动压缩中。。。
    echo.  
    goto pro+test--test
)
:pro+test--test
echo 即将测试环境打包,请静候...
cls
color 17
echo.  
call npm run test
rem 返回代码为>=1就跳至标题1处执行压缩，>=0就跳至标题exit处执行终止
IF ERRORLEVEL 1 (
    echo  打包出错了，快去看看怎么回事吧！！！
    echo.  
    goto start
)
IF ERRORLEVEL 0 (
    echo  打包完成，自动压缩中。。。
    echo.  
    goto zip
)


:production
echo.  即将进行生产环境打包，请稍后。。。
cls
color 07
echo.  
call npm run build
rem 返回代码为>=1就跳至标题1处执行压缩，>=0就跳至标题exit处执行终止
IF ERRORLEVEL 1 (
    echo  打包出错了，快去看看怎么回事吧！！！
    echo.  
    goto start
)
IF ERRORLEVEL 0 (
    echo  打包完成，自动压缩中。。。
    echo.  
    goto proZip
)

:test
echo 即将测试环境打包,请静候...
cls
color 07
echo.  
call npm run test
rem 返回代码为>=1就跳至标题1处执行压缩，>=0就跳至标题exit处执行终止
IF ERRORLEVEL 1 (
    echo  打包出错了，快去看看怎么回事吧！！！
    echo.  
    goto start
)
IF ERRORLEVEL 0 (
    echo  打包完成，自动压缩中。。。
    echo.  
    goto testZip
)

:zip
echo 即将开始压缩文件。。。
cls
color 17
echo. 
cd /d %proPath%
"%rar%" a -afzip -ep1 -r -av -ao -m5 "%proName%" "%proPath%\" -ibck
cd /d %testPath%
"%rar%" a -afzip -ep1 -r -av -ao -m5 "%testName%" "%testPath%\" -ibck
goto ftp

:proZip
echo 即将开始压缩文件。。。
cls
color 07
echo. 
cd /d %proPath%
"%rar%" a -afzip -ep1 -r -av -ao -m5 "%proName%" "%proPath%\" -ibck
goto proOpen

:testZip
echo 即将开始压缩文件。。。
cls
color 07
echo. 
cd /d %testPath%
"%rar%" a -afzip -ep1 -r -av -ao -m5 "%testName%" "%testPath%\" -ibck
goto testOpen

:proOpen
echo 压缩完成，自动打开当前文件夹。。。
cls
color 07
echo.  
explorer %cd%
goto proFtp

:testOpen
echo 压缩完成，自动打开当前文件夹。。。
cls
color 07
echo.  
explorer %cd%
goto testFtp

:ftp
echo 即将上传压缩文件到FTP服务器。。。
cls
color 17
echo.
echo open %ftpUrl% %ftpPort%>ftp.up
echo user %ftpUser% %ftpPwd%>>ftp.up
echo cd "%ftpPath%" >>ftp.up
echo binary>>ftp.up
echo mput "%proPath%\%proName%">>ftp.up
echo mput "%testPath%\%testName%">>ftp.up
echo bye>>ftp.up
FTP -n -v -i -s:ftp.up
del ftp.up /q
echo. 
echo. 按任意键返回主菜单
pause>unll
goto start

:proFtp
echo 即将上传压缩文件到FTP服务器。。。
cls
color 07
echo.
echo open %ftpUrl% %ftpPort%>ftp.up
echo user %ftpUser% %ftpPwd%>>ftp.up
echo cd "%ftpPath%" >>ftp.up
echo binary>>ftp.up
echo mput "%proPath%\%proName%">>ftp.up
echo bye>>ftp.up
FTP -n -v -i -s:ftp.up
del ftp.up /q
echo. 
echo. 按任意键返回主菜单
pause>unll
goto start

:testFtp
echo 即将上传压缩文件到FTP服务器。。。
cls
color 07
echo.
echo open %ftpUrl% %ftpPort%>ftp.up
echo user %ftpUser% %ftpPwd%>>ftp.up
echo cd "%ftpPath%" >>ftp.up
echo binary>>ftp.up
echo mput "%testPath%\%testName%">>ftp.up
echo bye>>ftp.up
FTP -n -v -i -s:ftp.up
del ftp.up /q
echo. 
echo. 按任意键返回主菜单
pause>unll
goto start