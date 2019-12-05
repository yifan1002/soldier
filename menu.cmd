@echo off&pushd %~dp0 &title 初始菜单

:menu
title 初始菜单
color 17
cls
echo.
echo 请挑选一个选项.
echo --------------------------------
echo.
echo 1.彩蛋
echo.
echo 2.启动EDGE命令行
echo.
echo 3.版权信息
echo.
echo 4.退出此菜单
echo.
echo ---------------------------------
echo.
echo.
set /p user_input=请输入:
if %user_input% equ 1 goto EG
if %user_input% equ 2 goto BOOT
if %user_input% equ 3 goto CREDIT
if %user_input% equ 4 goto QUIT
if %user_input% equ 0 goto SAFE
pause
goto menu

:EG
cls
color 17
start Matrix.cmd
goto menu

:BOOT
echo EDGE Operating System is starting!
cls
Setlocal enabledelayedexpansion
::CODER BY Administrator POWERD BY iBAT
color 70
title JASA Boot Manager
echo 启动中,请静候...
Loading
cmd /k MAIN.CMD
echo 感谢使用.
pause
goto menu

:CREDIT
cls
color 17
echo External Program Is Running...
notepad Readme.txt
echo Program Ended.
pause
goto menu

:QUIT
cls
title Thanks!
color 7d
echo 感谢您对此程序的支持.
echo 如果发现此程序有bug,请第一时间向制作者反馈.
echo 制作者QQ:814830426,验证答案:Andy
pause
exit

:SAFE
echo 即将进入普通命令行模式.
pause
title SafeMode
color 70
cls
call cmd.exe
goto QUIT