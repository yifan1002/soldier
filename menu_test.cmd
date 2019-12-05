title Vue项目自动打包、压缩、FTP上传批处理工具
color 07
cls
@echo off
echo. 
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
title 即将进行生产环境打包+上传FTP
echo 启动中,请静候...
cls
color 27
Loading
echo 感谢使用.
pause
goto menu


:test
title 即将测试环境打包+上传FTP
echo 启动中,请静候...
cls
color 37
Loading
echo 感谢使用.
pause
goto menu

pause