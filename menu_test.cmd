title Vue��Ŀ�Զ������ѹ����FTP�ϴ���������
color 07
cls
@echo off
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



::���ñ�������
rem �����zip��ʽ�ļ�����ҪWinRAR.exe����Ȼ�ᱨ"δ֪ѡ�afzip"
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
title ��������+���Ի������+�ϴ�FTP
echo ������,�뾲��...
cls
color 17
Loading
echo ��лʹ��.
pause
goto menu

:build
rem 1. �����������
echo.  ��������������������������Ժ󡣡���
cls
color 27
echo.  
call npm run build
rem ���ش���Ϊ>=1����������1��ִ��ѹ����>=0����������exit��ִ����ֹ
IF ERRORLEVEL 1 (
    echo  ��������ˣ���ȥ������ô���°ɣ�����
    echo.  
    goto exit
)
IF ERRORLEVEL 0 (
    echo  �����ɣ��Զ�ѹ���С�����
    echo.  
    goto zip
)

:test
title �������Ի������+�ϴ�FTP
echo ������,�뾲��...
cls
color 37
Loading
echo ��лʹ��.
pause
goto menu




rem 2. �Զ�ѹ����zip�ļ�
:zip
echo  ��ʼѹ���ļ�������
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

rem 3. �Զ��򿪵�ǰ�ļ���
:open
echo  ѹ����ɣ��Զ��򿪵�ǰ�ļ��С�����
echo.  
explorer %cd%
goto ftp

rem 4. �ϴ�ѹ������FTP
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