![StackZero Frozen Icon](static/stackzero.png)
# My own Website using StackZero
This is the template repository for [StackZero](https://github.com/RobertFent/StackZero)

## How to use

### Create your own routes and htmx pages -> tutorial will soon follow
Add the code to app/

### Launch everything with docker
On first launch just run this command:
```bash
docker compose up -d 
```
Or to always stay on the latest production ready version:
```bash
docker compose -f docker-compose.yml up --build --pull always
```
If you want to update to a specific version just edit the image tag in the dockerfile and run the command from above

### Further development
Hot reload is enabled in the dev compose file.<br>
While the container is running just update code in /app or /core locally and the server will automatically restart with the new changes
```bash
docker compose -f docker-compose-dev.yml up --build --pull always
```

### Optional
In any case you can just overwrite the core logic if you find yourself in a situation where something is missing<br>
Add the code to core/

## todo
- dev mode -> npm run start-local
- overwrite logic -> currently all content from app is copied to app in docker and replaces everything

## How to fork own repos
```bash
git clone git@github.com:RobertFent/StackZero-template.git
git remote rename origin upstream
git remote add origin git@github.com:RobertFent/my-website.git
git push -u origin master
```