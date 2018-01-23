var Git = require("nodegit");
var shell = require("shelljs");

// clone 一个仓库
Git.Clone("https://github.com/leietal/leietal.github.io.git", "leietal")
  .then((repo) => {
    console.log("==========> clone");
    console.log(repo);
  });

// 打开
Git.Repository.open("leietal")
  .then((repo) => {
    console.log("==========> clone");
    console.log(repo.workdir());
    var log = `git log --since="2016-12-31" --until="2017-12-31" --no-merges --numstat --pretty=format:"%ae" > 123.txt`;
    shell.cd(repo.workdir());
    shell.exec(log, {silent: true, encoding: 'utf8'});
  });
