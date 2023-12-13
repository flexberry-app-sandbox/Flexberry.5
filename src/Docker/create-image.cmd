docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 5/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t 5/app ../..
