title ��Ŀ�Զ����ѹ����������
cls
@echo off
echo  ����������������������������������������������������������������������������
echo.   
echo   vue+webpack ��Ŀ�Զ����ѹ����������     
echo.         
echo   ����˵����
echo.   
echo   1.vue+webpack��Ŀ�Զ����
echo.   
echo   2.������֮����Զ�ѹ��Ϊzip�ļ����Զ�������
echo.   
echo   3.ѹ����ɣ�����Դ���������Զ��򿪵�ǰ�ļ���
echo. 
echo.  4.�Զ��ϴ�ѹ������FTPָ��Ŀ¼
echo.   
echo  ����������������������������������������������������������������������������
echo.

rem 1. vue��Ŀ���
echo  �������д���������Ժ󡣡���
echo.  
call npm run build

rem ���ش���Ϊ>=1����������1��ִ��ѹ����>=0����������exit��ִ����ֹ

IF ERRORLEVEL 1 (
    echo  ��Ŀ��������ˣ���ȥ������ô���°ɣ�����
    echo.  
    goto exit
)
IF ERRORLEVEL 0 (
    echo  �����ɣ��Զ�ѹ���С�����
    echo.  
    goto zip
)

rem 2. �Զ�ѹ����zip�ļ�������code_yyMMddhhmmss��ʽ
:zip
echo  ��ʼѹ���ļ�������
echo. 
cd /d dist
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
set name=%appName%-%appTerm%-%appVer%-%appEnv%-%year%%month%%day%-%hour%%minute%
::exstudy_home-web-1.0.0.0-release-20191204-1510
::exstudy_home-web-1.0.0.0-snapshot-20191205-1553
::code_20191205 16 30 49
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


rem 4. ��ֹ�������ִ��
:exit
pause