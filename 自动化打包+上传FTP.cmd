title Vue��Ŀ�Զ������ѹ����FTP�ϴ���������
color 07
cls
@echo off

::���ñ�������
::��ȡ��ǰĿ¼
set root=%cd%
::FTP
set ftpUrl=192.168.11.236
set ftpPort=21
set ftpUser=anonymous
set ftpPwd=123
set ftpPath=/web/exstudy/1.0.0.0/app_sep
::WinRAR
rem �����zip��ʽ�ļ�����ҪWinRAR.exe����Ȼ�ᱨ"δ֪ѡ�afzip"
set rar=%ProgramFiles%\WinRAR\WinRAR.exe
::ѹ����
set appName=exstudy_home
set appTerm=web
set appVer=1.0.0.0
set year=%date:~0,4%
set month=%date:~5,2%
set day=%date:~8,2%
set hour=%time:~0,2%
set minute=%time:~3,2%
set second=%time:~6,2%
::��������
set proAppEnv=release
set proName=%appName%-%appTerm%-%appVer%-%proAppEnv%-%year%%month%%day%-%hour%%minute%.zip
set proPath=%root%\dist
::���Ի���
set testAppEnv=snapshot
set testName=%appName%-%appTerm%-%appVer%-%testAppEnv%-%year%%month%%day%-%hour%%minute%.zip
set testPath=%root%\test

:start
color 07
cls
echo. 
echo.
echo.  ����������������������������������������������������������������������������
echo.   
echo     vue+webpack ��Ŀ�Զ����ѹ����������     
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
if %user_input% equ 1 goto pro+test
if %user_input% equ 2 goto production
if %user_input% equ 3 goto test
pause
goto menu

:pro+test
title ������������+���Ի������+�ϴ�FTP
cls
color 17
goto pro+test--pro
:pro+test--pro
echo.  ������������������������Ժ󡣡���
cls
color 17
echo.  
call npm run build
rem ���ش���Ϊ>=1����������1��ִ��ѹ����>=0����������exit��ִ����ֹ
IF ERRORLEVEL 1 (
    echo  ��������ˣ���ȥ������ô���°ɣ�����
    echo.  
    goto start
)
IF ERRORLEVEL 0 (
    echo  �����ɣ��Զ�ѹ���С�����
    echo.  
    goto pro+test--test
)
:pro+test--test
echo �������Ի������,�뾲��...
cls
color 17
echo.  
call npm run test
rem ���ش���Ϊ>=1����������1��ִ��ѹ����>=0����������exit��ִ����ֹ
IF ERRORLEVEL 1 (
    echo  ��������ˣ���ȥ������ô���°ɣ�����
    echo.  
    goto start
)
IF ERRORLEVEL 0 (
    echo  �����ɣ��Զ�ѹ���С�����
    echo.  
    goto zip
)


:production
echo.  ������������������������Ժ󡣡���
cls
color 07
echo.  
call npm run build
rem ���ش���Ϊ>=1����������1��ִ��ѹ����>=0����������exit��ִ����ֹ
IF ERRORLEVEL 1 (
    echo  ��������ˣ���ȥ������ô���°ɣ�����
    echo.  
    goto start
)
IF ERRORLEVEL 0 (
    echo  �����ɣ��Զ�ѹ���С�����
    echo.  
    goto proZip
)

:test
echo �������Ի������,�뾲��...
cls
color 07
echo.  
call npm run test
rem ���ش���Ϊ>=1����������1��ִ��ѹ����>=0����������exit��ִ����ֹ
IF ERRORLEVEL 1 (
    echo  ��������ˣ���ȥ������ô���°ɣ�����
    echo.  
    goto start
)
IF ERRORLEVEL 0 (
    echo  �����ɣ��Զ�ѹ���С�����
    echo.  
    goto testZip
)

:zip
echo ������ʼѹ���ļ�������
cls
color 17
echo. 
cd /d %proPath%
"%rar%" a -afzip -ep1 -r -av -ao -m5 "%proName%" "%proPath%\" -ibck
cd /d %testPath%
"%rar%" a -afzip -ep1 -r -av -ao -m5 "%testName%" "%testPath%\" -ibck
goto ftp

:proZip
echo ������ʼѹ���ļ�������
cls
color 07
echo. 
cd /d %proPath%
"%rar%" a -afzip -ep1 -r -av -ao -m5 "%proName%" "%proPath%\" -ibck
goto proOpen

:testZip
echo ������ʼѹ���ļ�������
cls
color 07
echo. 
cd /d %testPath%
"%rar%" a -afzip -ep1 -r -av -ao -m5 "%testName%" "%testPath%\" -ibck
goto testOpen

:proOpen
echo ѹ����ɣ��Զ��򿪵�ǰ�ļ��С�����
cls
color 07
echo.  
explorer %cd%
goto proFtp

:testOpen
echo ѹ����ɣ��Զ��򿪵�ǰ�ļ��С�����
cls
color 07
echo.  
explorer %cd%
goto testFtp

:ftp
echo �����ϴ�ѹ���ļ���FTP������������
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
echo. ��������������˵�
pause>unll
goto start

:proFtp
echo �����ϴ�ѹ���ļ���FTP������������
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
echo. ��������������˵�
pause>unll
goto start

:testFtp
echo �����ϴ�ѹ���ļ���FTP������������
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
echo. ��������������˵�
pause>unll
goto start