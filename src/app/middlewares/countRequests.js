let requests = 0;

export default async (req, res, next) => {
  requests += 1;

  console.log(
    `[Requests counter]: ${requests} requests since application is running`
  );

  return next();
};
