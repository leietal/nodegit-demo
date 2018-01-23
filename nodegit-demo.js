var Git = require("nodegit");
var shell = require("shelljs");

// clone 一个仓库
Git.Clone("https://github.com/leietal/leietal.github.io.git", "leietal")
  .then((repo) => {
    console.log("==========> clone");
  });

// 打开
Git.Repository.open("leietal")
  .then((repo) => {
    console.log("==========> open");
    // 命令
    var log = `git log --since="2016-12-31" --until="2017-12-31" --no-merges --numstat --pretty=format:"%ae" > 123.txt`;
    // 进入项目路径
    shell.cd(repo.workdir());
    // 执行命令
    shell.exec(log, {silent: true, encoding: 'utf8'});
  });
