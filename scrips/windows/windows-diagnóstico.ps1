Write-Output "Iniciando diagnóstico del sistema..."

$systemInfo = @{
    ComputerName = $env:COMPUTERNAME
    UserName = $env:USERNAME
    OS = (Get-CimInstance Win32_OperatingSystem).Caption
    RAM_GB = [Math]::Round((Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory / 1GB,2)
    CPU = (Get-CimInstance Win32_Processor).Name
    DiskFree_GB = [Math]::Round((Get-PSDrive C).Free / 1GB,2)
}

$json = $systemInfo | ConvertTo-Json

$path = "$env:TEMP\diagnostico.json"
$json | Out-File $path

Write-Output "Diagnóstico completado"
Write-Output "Archivo generado en: $path"
