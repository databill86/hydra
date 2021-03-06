---
id: intro
title: Getting started
sidebar_label: Getting started
---
## Introduction
Hydra is a framework for elegantly configuring complex applications.
The name Hydra comes from its ability to run multiple similar jobs - much like a Hydra with
multiple heads.

### Key features:

* Hierarchical configuration composable from multiple sources
* Configuration can be specified or overridden from the command line
* Dynamic command line tab completion
* Run your application locally or launch it to run remotely
* Run multiple jobs with different arguments with a single command

Hydra requires Python 3.6 or newer, and it officially supports Linux, Mac and Windows.

## Quick start guide
This guide will show you some of the most important features of Hydra.
Read the [tutorial](tutorial/1_simple_cli_app.md) to gain a deeper understanding.

### Installation
Install the stable release with `pip install hydra-core --upgrade`.

You can install pre-release versions with `pip install hydra-core --pre --upgrade`. 
Those may contain nuts and bugs and might be incompatible with existing plugins.

### Basic example
Configuration file: `config.yaml`

```yaml
db:
  driver: mysql
  user: omry
  pass: secret
```

Python file: `my_app.py`
```python {4-6}
import hydra
from omegaconf import DictConfig

@hydra.main(config_path="config.yaml")
def my_app(cfg : DictConfig) -> None:
    print(cfg.pretty())

if __name__ == "__main__":
    my_app()
```
You can learn more about OmegaConf [here](https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation) later.

`config.yaml` is loaded automatically when you run your application
```yaml
$ python my_app.py
db:
  driver: mysql
  pass: secret
  user: omry
```

You can override values in the loaded config from the command line:
```yaml {4-5}
$ python my_app.py db.user=root db.pass=1234
db:
  driver: mysql
  user: root
  pass: 1234
```

### Composition example
You may want to alternate between two different databases. to support this create a `config group` named db,
and place one config file for each alternative inside:
The directory structure of our application now looks like:
```text
├── db
│   ├── mysql.yaml
│   └── postgresql.yaml
├── config.yaml
└── my_app.py
```

Here is the new `config.yaml`
```yaml
defaults:
    - db: mysql
# some other config options in your config file.
website:
    domain: example.com
```

`defaults` is a special directive telling Hydra to use db/mysql.yaml when composing the configuration object.
The resulting cfg object is a composition of configs from defaults with configs specified in your `config.yaml`.

You can now choose which database configuration to use from the and override values from the command line: 
```yaml
$ python my_app.py db=postgresql db.timeout=20
db:
  driver: postgresql
  pass: drowssap
  timeout: 20
  user: postgre_user
website:
    domain: example.com
```
You can have as many config groups as you need.

### Multirun
You can run your function multiple times with different configuration easily with the `--multirun|-m` flag.


```
$ python my_app.py --multirun db=mysql,postgresql
[HYDRA] Sweep output dir : multirun/2020-01-09/01-16-29
[HYDRA] Launching 2 jobs locally
[HYDRA]        #0 : db=mysql
db:
  driver: mysql
  pass: secret
  user: omry
website:
    domain: example.com

[HYDRA]        #1 : db=postgresql
db:
  driver: postgresql
  pass: drowssap
  timeout: 10
  user: postgre_user
website:
    domain: example.com
```

There is a whole lot more to Hydra. Read the [tutorial](tutorial/1_simple_cli_app.md) to learn more.

## Other stuff
### Community
Ask questions in the google group or the chat:
* [Zulip Chat](https://hydra-framework.zulipchat.com)
* [Google group](https://groups.google.com/d/forum/hydra_framework)

Follow Hydra on Twitter and Facebook:
* [Facebook page](https://www.facebook.com/Hydra-Framework-109364473802509/)
* [Twitter](https://twitter.com/Hydra_Framework)


### Citing Hydra
If you use Hydra in your research please use the following BibTeX entry:
```text
@Misc{,
  author =       {Omry Yadan},
  title =        {A framework for elegantly configuring complex applications},
  howpublished = {Github},
  year =         {2019},
  url =          {https://github.com/facebookresearch/hydra}
}
```
