title Vue项目自动打包、压缩、FTP上传批处理工具
color 07
cls
@echo off
echo. 
echo.
echo.  ┌────────────────────────────────────┐
echo.   
echo     vue+webpack 项目自动打包压缩批处理工具     
echo.
echo.    作者：若华
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
if %user_input% equ 1 goto b+t
if %user_input% equ 2 goto build
if %user_input% equ 3 goto test
pause
goto menu



::常用变量设置
rem 打包成zip格式文件就需要WinRAR.exe，不然会报"未知选项：afzip"
set rar=%ProgramFiles%\WinRAR\WinRAR.exe 
set appName=exstudy_home
set appTerm=web
set appVer=1.0.0.0
set appEnv=release
set year=%date:~0,4%
set month=%date:~5,2%
set day=%date:~8,2%
set hour=%time:~0,2%
set minute=%time:~3,2%
set second=%time:~6,2%
::exstudy_home-web-1.0.0.0-release-20191204-1510
::exstudy_home-web-1.0.0.0-snapshot-20191205-1553
::code_20191205 16 30 49




:b+t
title 即将生产+测试环境打包+上传FTP
echo 启动中,请静候...
cls
color 17
Loading
echo 感谢使用.
pause
goto menu

:build
rem 1. 生产环境打包
echo.  即将进行生产环境打包处理，请稍后。。。
cls
color 27
echo.  
call npm run build
rem 返回代码为>=1就跳至标题1处执行压缩，>=0就跳至标题exit处执行终止
IF ERRORLEVEL 1 (
    echo  打包出错了，快去看看怎么回事吧！！！
    echo.  
    goto exit
)
IF ERRORLEVEL 0 (
    echo  打包完成，自动压缩中。。。
    echo.  
    goto zip
)

:test
title 即将测试环境打包+上传FTP
echo 启动中,请静候...
cls
color 37
Loading
echo 感谢使用.
pause
goto menu




rem 2. 自动压缩成zip文件
:zip
echo  开始压缩文件。。。
echo. 
cd /d dist
set name=%appName%-%appTerm%-%appVer%-%appEnv%-%year%%month%%day%-%hour%%minute%
(echo css
echo fonts
echo img
echo js
echo favicon.ico
echo index.html)>R.lst
"%rar%" a -afzip "%name%.zip" -ep1 -rr -av -ao -m5 @R.lst -ibck -xR.lst 
del R.lst
goto open

rem 3. 自动打开当前文件夹
:open
echo  压缩完成，自动打开当前文件夹。。。
echo.  
explorer %cd%
goto ftp

rem 4. 上传压缩包到FTP
:ftp
echo open 192.168.11.236 >ftp.up
echo user anonymous "" >>ftp.up
echo cd /d web\exstudy\1.0.0.0\app_sep >>ftp.up
echo binary>>ftp.up
echo put "%cd%\%name%.zip">>ftp.up
echo bye>>ftp.up
FTP -n -s:ftp.up
del ftp.up /q
goto exit



pause