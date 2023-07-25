TAGS := annd2/test-db:1.0.0

buildd:
	docker build -t ${TAGS} .
push:
	docker push ${TAGS}

up:
	docker compose up -d
down:
	docker compose down
ps:
	docker ps -a
