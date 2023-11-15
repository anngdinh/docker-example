# builder image
FROM amd64/golang:1.19 as builder
WORKDIR /build
ADD . /build
RUN ls -a -l
RUN go build ./main.go

# generate clean, final image for end users
FROM ubuntu:22.04
WORKDIR /app
COPY --from=builder /build/main .
# RUN apt-get update && apt-get install curl -y

RUN ls -a -l
RUN chmod u+x main
# executable
ENTRYPOINT [ "/app/main" ]
