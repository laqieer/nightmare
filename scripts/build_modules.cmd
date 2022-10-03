cd ..\nightmare-util\src
for %%f in (..\..\nightmare-module\references\*.txt) do node .\converter.js "..\..\nightmare-module\Fire-Emblem-Nightmare-Modules\%%~nf Nightmare Modules" ..\..\nightmare\src\components\Module\%%~nf %%f
cd ..\..\scripts
