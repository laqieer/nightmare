for %%f in (references\*.txt) do node node_modules\@laqieer\nightmare-util\src\converter.js "Fire-Emblem-Nightmare-Modules\%%~nf Nightmare Modules" ..\nightmare\src\components\Module\%%~nf %%f
