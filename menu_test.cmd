title Vue��Ŀ�Զ������ѹ����FTP�ϴ���������
color 07
cls
@echo off
echo. 
echo.
echo.
echo.  ����������������������������������������������������������������������������
echo.   
echo     vue+webpack ��Ŀ�Զ����ѹ����������     
echo.
echo.    ���ߣ�����
echo.
echo.
echo.
echo     ����˵����
echo.   
echo     1.vue+webpack��Ŀ�Զ����
echo.   
echo.    2.�����������Ժ�����+�������ִ��ģʽ
echo.
echo.    3.�������Զ�ѹ��Ϊzip�ļ�
echo.
echo.    4.�����Ͳ��Ե�ģʽ�����ɣ�����Դ���������Զ��򿪵�ǰ�ļ���
echo.  
echo.    5.�������ϴ�ѹ������FTPָ��Ŀ¼
echo.
echo.
echo.  ����������������������������������������������������������������������������
echo.
pause

:menu
color 07
cls
echo.
echo.  ����������������������������������������������������������������������������
echo.
echo.    ��ѡ����ģʽ
echo.
echo.
echo.    1. ����+���Ի������+�ϴ�FTP
echo.
echo.    2. �����������+�ϴ�FTP
echo.
echo.    3. ���Ի������+�ϴ�FTP
echo.
echo  ����������������������������������������������������������������������������
echo.
echo.
set /p user_input=������:
if %user_input% equ 1 goto b+t
if %user_input% equ 2 goto build
if %user_input% equ 3 goto test
pause
goto menu

:b+t
title ��������+���Ի������+�ϴ�FTP
echo ������,�뾲��...
cls
color 17
Loading
echo ��лʹ��.
pause
goto menu

:build
title �������������������+�ϴ�FTP
echo ������,�뾲��...
cls
color 27
Loading
echo ��лʹ��.
pause
goto menu


:test
title �������Ի������+�ϴ�FTP
echo ������,�뾲��...
cls
color 37
Loading
echo ��лʹ��.
pause
goto menu

pause