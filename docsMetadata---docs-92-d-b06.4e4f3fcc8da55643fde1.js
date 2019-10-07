(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{37:function(i){i.exports=JSON.parse('{"docs":{"getting_started":{"id":"getting_started","title":"Getting started","sidebar_label":"Getting started","description":"### Requirements","source":"@site/docs/getting_started.md","permalink":"/docs/getting_started","sidebar":"Docs","category":"About","next":"tutorial/simple_cli","previous":"intro","previous_title":"Introduction","next_title":"Simple command line application"},"advanced/app_packaging":{"id":"advanced/app_packaging","title":"Application packaging","sidebar_label":"Application packaging","description":"You can package your Hydra application along with its configuration.","source":"@site/docs/advanced/packaging.md","permalink":"/docs/advanced/app_packaging","sidebar":"Docs","category":"Advanced","next":"advanced/search_path","previous":"configure_hydra/workdir","previous_title":"Customizing working directory pattern","next_title":"Config search path"},"intro":{"id":"intro","title":"Introduction","sidebar_label":"Introduction","description":"Hydra is a framework for elegantly configuring complex applications.","source":"@site/docs/intro.md","permalink":"/docs/intro","sidebar":"Docs","category":"About","next":"getting_started","next_title":"Getting started"},"advanced/plugins":{"id":"advanced/plugins","title":"Hydra plugins","sidebar_label":"Hydra plugins","description":"Hydra has a plugin architecture.","source":"@site/docs/advanced/plugins.md","permalink":"/docs/advanced/plugins","sidebar":"Docs","category":"Advanced","next":"development/contributing","previous":"advanced/search_path","previous_title":"Config search path","next_title":"Contributing"},"advanced/search_path":{"id":"advanced/search_path","title":"Config search path","sidebar_label":"Config search path","description":"Hydra uses a search path approach to find configuration files as it composes the configuration object.","source":"@site/docs/advanced/search_path.md","permalink":"/docs/advanced/search_path","sidebar":"Docs","category":"Advanced","next":"advanced/plugins","previous":"advanced/app_packaging","previous_title":"Application packaging","next_title":"Hydra plugins"},"configure_hydra/intro":{"id":"configure_hydra/intro","title":"Overview","sidebar_label":"Introduction","description":"## Hydra config","source":"@site/docs/configure_hydra/Intro.md","permalink":"/docs/configure_hydra/intro","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/hydra_config","previous":"patterns/specializing_config","previous_title":"Specializing configuration","next_title":"Hydra configuration"},"configure_hydra/hydra_config":{"id":"configure_hydra/hydra_config","title":"Hydra configuration","sidebar_label":"Hydra configuration","description":"Anything under the hydra branch of the config can be overridden in various ways.","source":"@site/docs/configure_hydra/hydra_config.md","permalink":"/docs/configure_hydra/hydra_config","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/logging","previous":"configure_hydra/intro","previous_title":"Overview","next_title":"Customizing logging"},"configure_hydra/logging":{"id":"configure_hydra/logging","title":"Customizing logging","sidebar_label":"Customizing logging","description":"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it [here](https://docs.python.org/3/howto/logging.html).","source":"@site/docs/configure_hydra/logging.md","permalink":"/docs/configure_hydra/logging","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/workdir","previous":"configure_hydra/hydra_config","previous_title":"Hydra configuration","next_title":"Customizing working directory pattern"},"configure_hydra/workdir":{"id":"configure_hydra/workdir","title":"Customizing working directory pattern","sidebar_label":"Customizing working directory pattern","description":"See the [intro](intro) for details about how to apply the customization.","source":"@site/docs/configure_hydra/workdir.md","permalink":"/docs/configure_hydra/workdir","sidebar":"Docs","category":"Configuring Hydra","next":"advanced/app_packaging","previous":"configure_hydra/logging","previous_title":"Customizing logging","next_title":"Application packaging"},"development/contributing":{"id":"development/contributing","title":"Contributing","sidebar_label":"Contributing","description":"This guide assumes you have forked and checked-out the repository.","source":"@site/docs/development/contributing.md","permalink":"/docs/development/contributing","sidebar":"Docs","category":"Development","next":"development/release","previous":"advanced/plugins","previous_title":"Hydra plugins","next_title":"Release process"},"development/release":{"id":"development/release","title":"Release process","sidebar_label":"Release process","description":"The release process is work in progress and will be automated in the future.","source":"@site/docs/development/release.md","permalink":"/docs/development/release","sidebar":"Docs","category":"Development","previous":"development/contributing","previous_title":"Contributing"},"tutorial/debugging":{"id":"tutorial/debugging","title":"Debugging","sidebar_label":"Debugging","description":"Hydra provides a few options to improve debuggability.","source":"@site/docs/tutorial/10_debugging.md","permalink":"/docs/tutorial/debugging","sidebar":"Docs","category":"Tutorial","next":"patterns/objects","previous":"tutorial/logging","previous_title":"Logging","next_title":"Creating objects"},"tutorial/simple_cli":{"id":"tutorial/simple_cli","title":"Simple command line application","sidebar_label":"Simple command line application","description":"This is a simple Hydra application that prints your configuration.","source":"@site/docs/tutorial/1_simple_cli_app.md","permalink":"/docs/tutorial/simple_cli","sidebar":"Docs","category":"Tutorial","next":"tutorial/config_file","previous":"getting_started","previous_title":"Getting started","next_title":"Configuration file"},"tutorial/config_file":{"id":"tutorial/config_file","title":"Configuration file","sidebar_label":"Configuration file","description":"It can get tedious to type all those command line arguments every time.","source":"@site/docs/tutorial/2_config_file.md","permalink":"/docs/tutorial/config_file","sidebar":"Docs","category":"Tutorial","next":"tutorial/config_groups","previous":"tutorial/simple_cli","previous_title":"Simple command line application","next_title":"Config groups"},"tutorial/config_groups":{"id":"tutorial/config_groups","title":"Config groups","sidebar_label":"Config groups","description":"This is the most important concept in Hydra.","source":"@site/docs/tutorial/3_config_groups.md","permalink":"/docs/tutorial/config_groups","sidebar":"Docs","category":"Tutorial","next":"tutorial/defaults","previous":"tutorial/config_file","previous_title":"Configuration file","next_title":"Defaults"},"tutorial/defaults":{"id":"tutorial/defaults","title":"Defaults","sidebar_label":"Defaults","description":"After office politics, you decide that you want to use MySQL by default.","source":"@site/docs/tutorial/4_defaults.md","permalink":"/docs/tutorial/defaults","sidebar":"Docs","category":"Tutorial","next":"tutorial/composition","previous":"tutorial/config_groups","previous_title":"Config groups","next_title":"Config composition"},"tutorial/multi-run":{"id":"tutorial/multi-run","title":"Multi-run","sidebar_label":"Multi-run","description":"Sometimes you want to run a parameter sweep.","source":"@site/docs/tutorial/6_multirun.md","permalink":"/docs/tutorial/multi-run","sidebar":"Docs","category":"Tutorial","next":"tutorial/tab_completion","previous":"tutorial/composition","previous_title":"Config composition","next_title":"Tab completion"},"tutorial/composition":{"id":"tutorial/composition","title":"Config composition","sidebar_label":"Config composition","description":"The product manager had an idea:","source":"@site/docs/tutorial/5_composition.md","permalink":"/docs/tutorial/composition","sidebar":"Docs","category":"Tutorial","next":"tutorial/multi-run","previous":"tutorial/defaults","previous_title":"Defaults","next_title":"Multi-run"},"tutorial/working_directory":{"id":"tutorial/working_directory","title":"Output/Working directory","sidebar_label":"Output/Working directory","description":"Hydra solves the problem of your needing to specify a new output directory for each run, by ","source":"@site/docs/tutorial/8_working_directory.md","permalink":"/docs/tutorial/working_directory","sidebar":"Docs","category":"Tutorial","next":"tutorial/logging","previous":"tutorial/tab_completion","previous_title":"Tab completion","next_title":"Logging"},"tutorial/tab_completion":{"id":"tutorial/tab_completion","title":"Tab completion","sidebar_label":"Tab completion","description":"You can enable shell TAB completion, for example:","source":"@site/docs/tutorial/7_tab_completion.md","permalink":"/docs/tutorial/tab_completion","sidebar":"Docs","category":"Tutorial","next":"tutorial/working_directory","previous":"tutorial/multi-run","previous_title":"Multi-run","next_title":"Output/Working directory"},"tutorial/logging":{"id":"tutorial/logging","title":"Logging","sidebar_label":"Logging","description":"People often do not use Python logging due to the setup cost.","source":"@site/docs/tutorial/9_logging.md","permalink":"/docs/tutorial/logging","sidebar":"Docs","category":"Tutorial","next":"tutorial/debugging","previous":"tutorial/working_directory","previous_title":"Output/Working directory","next_title":"Debugging"},"patterns/objects":{"id":"patterns/objects","title":"Creating objects","sidebar_label":"Creating objects","description":"One of the best ways to drive different behavior in the application is to instantiate different implementations of an interface.","source":"@site/docs/patterns/objects.md","permalink":"/docs/patterns/objects","sidebar":"Docs","category":"Common patterns","next":"patterns/specializing_config","previous":"tutorial/debugging","previous_title":"Debugging","next_title":"Specializing configuration"},"patterns/specializing_config":{"id":"patterns/specializing_config","title":"Specializing configuration","sidebar_label":"Specializing configuration","description":"In some cases the desired configuration should depend on other configuration choices.","source":"@site/docs/patterns/specializing_config.md","permalink":"/docs/patterns/specializing_config","sidebar":"Docs","category":"Common patterns","next":"configure_hydra/intro","previous":"patterns/objects","previous_title":"Creating objects","next_title":"Overview"}},"docsDir":"/home/circleci/project/website/docs","docsSidebars":{"Docs":[{"type":"category","label":"About","items":[{"type":"doc","id":"intro"},{"type":"doc","id":"getting_started"}]},{"type":"category","label":"Tutorial","items":[{"type":"doc","id":"tutorial/simple_cli"},{"type":"doc","id":"tutorial/config_file"},{"type":"doc","id":"tutorial/config_groups"},{"type":"doc","id":"tutorial/defaults"},{"type":"doc","id":"tutorial/composition"},{"type":"doc","id":"tutorial/multi-run"},{"type":"doc","id":"tutorial/tab_completion"},{"type":"doc","id":"tutorial/working_directory"},{"type":"doc","id":"tutorial/logging"},{"type":"doc","id":"tutorial/debugging"}]},{"type":"category","label":"Common patterns","items":[{"type":"doc","id":"patterns/objects"},{"type":"doc","id":"patterns/specializing_config"}]},{"type":"category","label":"Configuring Hydra","items":[{"type":"doc","id":"configure_hydra/intro"},{"type":"doc","id":"configure_hydra/hydra_config"},{"type":"doc","id":"configure_hydra/logging"},{"type":"doc","id":"configure_hydra/workdir"}]},{"type":"category","label":"Advanced","items":[{"type":"doc","id":"advanced/app_packaging"},{"type":"doc","id":"advanced/search_path"},{"type":"doc","id":"advanced/plugins"}]},{"type":"category","label":"Development","items":[{"type":"doc","id":"development/contributing"},{"type":"doc","id":"development/release"}]}]},"sourceToPermalink":{"@site/docs/getting_started.md":"/docs/getting_started","@site/docs/advanced/packaging.md":"/docs/advanced/app_packaging","@site/docs/intro.md":"/docs/intro","@site/docs/advanced/plugins.md":"/docs/advanced/plugins","@site/docs/advanced/search_path.md":"/docs/advanced/search_path","@site/docs/configure_hydra/Intro.md":"/docs/configure_hydra/intro","@site/docs/configure_hydra/hydra_config.md":"/docs/configure_hydra/hydra_config","@site/docs/configure_hydra/logging.md":"/docs/configure_hydra/logging","@site/docs/configure_hydra/workdir.md":"/docs/configure_hydra/workdir","@site/docs/development/contributing.md":"/docs/development/contributing","@site/docs/development/release.md":"/docs/development/release","@site/docs/tutorial/10_debugging.md":"/docs/tutorial/debugging","@site/docs/tutorial/1_simple_cli_app.md":"/docs/tutorial/simple_cli","@site/docs/tutorial/2_config_file.md":"/docs/tutorial/config_file","@site/docs/tutorial/3_config_groups.md":"/docs/tutorial/config_groups","@site/docs/tutorial/4_defaults.md":"/docs/tutorial/defaults","@site/docs/tutorial/6_multirun.md":"/docs/tutorial/multi-run","@site/docs/tutorial/5_composition.md":"/docs/tutorial/composition","@site/docs/tutorial/8_working_directory.md":"/docs/tutorial/working_directory","@site/docs/tutorial/7_tab_completion.md":"/docs/tutorial/tab_completion","@site/docs/tutorial/9_logging.md":"/docs/tutorial/logging","@site/docs/patterns/objects.md":"/docs/patterns/objects","@site/docs/patterns/specializing_config.md":"/docs/patterns/specializing_config"},"permalinkToId":{"/docs/getting_started":"getting_started","/docs/advanced/app_packaging":"advanced/app_packaging","/docs/intro":"intro","/docs/advanced/plugins":"advanced/plugins","/docs/advanced/search_path":"advanced/search_path","/docs/configure_hydra/intro":"configure_hydra/intro","/docs/configure_hydra/hydra_config":"configure_hydra/hydra_config","/docs/configure_hydra/logging":"configure_hydra/logging","/docs/configure_hydra/workdir":"configure_hydra/workdir","/docs/development/contributing":"development/contributing","/docs/development/release":"development/release","/docs/tutorial/debugging":"tutorial/debugging","/docs/tutorial/simple_cli":"tutorial/simple_cli","/docs/tutorial/config_file":"tutorial/config_file","/docs/tutorial/config_groups":"tutorial/config_groups","/docs/tutorial/defaults":"tutorial/defaults","/docs/tutorial/multi-run":"tutorial/multi-run","/docs/tutorial/composition":"tutorial/composition","/docs/tutorial/working_directory":"tutorial/working_directory","/docs/tutorial/tab_completion":"tutorial/tab_completion","/docs/tutorial/logging":"tutorial/logging","/docs/patterns/objects":"patterns/objects","/docs/patterns/specializing_config":"patterns/specializing_config"}}')}}]);