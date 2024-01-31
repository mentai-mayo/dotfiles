# code $profile

function Prompt {
  # print "\n"
  Write-Host " "
  # print powershell version
  Write-Host " Pwsh"("v" + $PSVersionTable.PSVersion.toString() + " ") -NoNewLine -BackgroundColor "Blue"
  # print current directory
  Write-Host (" " + (Get-Location) + " ") -NoNewLine -BackgroundColor "DarkBlue"

  # print git status
  if (Test-Path ".git") {
    Write-Host (" " + (git rev-parse --abbrev-ref HEAD) + " ") -NoNewLine -BackgroundColor "Green" -ForegroundColor "Black"
  }

  # print cursor
  if ( $? ) {
    return "`e[32m> `e[0m"
  } else {
    return "`e[31m> `e[0m"
  }
}
