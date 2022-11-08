# Как работать над проектом

## Окружение

Для удобства работы над проектом используются инструменты из **Node.js** и **npm**. Все необходимые настройки произведены. Убедитесь, что на рабочем компьютере установлена **Node.js**, соответсвтующая актуальной версии. Актуальная версия **Node.js** указана в файле `package.json` в поле `node`. После, в терминале, перейти в директорию с проектом и _единожды_ запустите команду:

```bash
npm install
```

Данная команда запустит процесс установки зависимостей проекта из **npm**.

### Сценарии

После создания проекта вам доступны следующие сценарии.

#### Компиляция проекта

```bash
npm run compile
```

Во время выполнения инструкций по компиляции проекта, в корне проекта создается директория `dist`, в которую будут помещены результирующие файлы.

#### Очистка проекта

```bash
npm run clean
```

Во время выполения инструкции по очистке проекта, директория `dist`, которая предназначена для хранения результирующих файлов, будет удалена.

#### Сборка проекта

```bash
npm run build
```

В процессе сборки приложения, будут выполнены инструкции «Очистка проекта» и «Компиляция проекта». 

#### Проверка линтером

```bash
npm run lint
```

Запуск проверки проекта статическим анализатором кода **ESLint**.

Анализ кода производится только в файлах, которые находятся в директории `src`.

**Обратите внимание**, при запуске данной команды, ошибки выводятся в терминал.

#### Запуск REPL

```bash
npm run ts
```

Запуск `ts-node` позволяет вам напрямую выполнять код TypeScript на NodeJS без предварительной компиляции. 

#### Запуск проекта

```bash
npm start
```

В процессе запуска проекта будет выполнен процесс «Сборки проекта» и запуска результирующего кода.

## Структура проекта

### Директория `src`

В директории размещаются исходный код проекта: компоненты, модули и так далее. Структура директории `src` может быть произвольной.

### Файл `Readme.md`

Файл, содержащий инструкции по работе с учебным репозиторием.

### Файл `Contributing.md`

Файл, содержащий советы и инструкции по внесению изменений в учебный репозиторий.

### Остальное

Все остальные файлы в проекте являются служебными. Пожалуйста, не удаляйте и не изменяйте их самовольно. Только если того требует задание или наставник.