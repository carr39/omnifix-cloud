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

$endpoint = "https://omnifix-cloud.vercel.app/api/diagnostico"

Invoke-RestMethod `
  -Uri $endpoint `
  -Method POST `
  -Body $json `
  -ContentType "application/json"

Write-Output "Diagnóstico enviado a la nube"que 
