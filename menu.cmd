@echo off&pushd %~dp0 &title ��ʼ�˵�

:menu
title ��ʼ�˵�
color 17
cls
echo.
echo ����ѡһ��ѡ��.
echo --------------------------------
echo.
echo 1.�ʵ�
echo.
echo 2.����EDGE������
echo.
echo 3.��Ȩ��Ϣ
echo.
echo 4.�˳��˲˵�
echo.
echo ---------------------------------
echo.
echo.
set /p user_input=������:
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
echo ������,�뾲��...
Loading
cmd /k MAIN.CMD
echo ��лʹ��.
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
echo ��л���Դ˳����֧��.
echo ������ִ˳�����bug,���һʱ���������߷���.
echo ������QQ:814830426,��֤��:Andy
pause
exit

:SAFE
echo ����������ͨ������ģʽ.
pause
title SafeMode
color 70
cls
call cmd.exe
goto QUIT