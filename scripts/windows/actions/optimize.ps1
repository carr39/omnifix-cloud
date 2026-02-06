Write-Output "Optimización del sistema..."

Get-Service |
Where-Object {$_.StartType -eq "Automatic" -and $_.Status -eq "Stopped"} |
Start-Service

powercfg -h off

Write-Output "Optimización aplicada"
