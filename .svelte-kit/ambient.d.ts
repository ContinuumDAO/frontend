
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const PROFILEHOME: string;
	export const KDE_FULL_SESSION: string;
	export const BOOST_ARCH_PATH: string;
	export const LANGUAGE: string;
	export const WM_PROJECT: string;
	export const FOAM_SITE_LIBBIN: string;
	export const WM_DIR: string;
	export const J2SDKDIR: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const ParaView_INCLUDE_DIR: string;
	export const XCURSOR_SIZE: string;
	export const J2REDIR: string;
	export const KONSOLE_VERSION: string;
	export const SHLVL: string;
	export const LD_LIBRARY_PATH: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const NVM_INC: string;
	export const WM_PROJECT_DIR: string;
	export const SHELL_SESSION_ID: string;
	export const GTK_RC_FILES: string;
	export const GTK_MODULES: string;
	export const WM_ARCH_OPTION: string;
	export const KDE_SESSION_VERSION: string;
	export const KONSOLE_DBUS_SESSION: string;
	export const FOAM_ETC: string;
	export const WM_COMPILE_OPTION: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const KDED_STARTED_BY_KDEINIT: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const npm_config_resolution_mode: string;
	export const COLORTERM: string;
	export const FOAM_EXT_LIBBIN: string;
	export const FOAM_SITE_APPBIN: string;
	export const FOAM_USER_LIBBIN: string;
	export const KONSOLE_DBUS_WINDOW: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const npm_config_metrics_registry: string;
	export const GTK_IM_MODULE: string;
	export const LOGNAME: string;
	export const FOAM_APP: string;
	export const WM_LDFLAGS: string;
	export const GO111MODULE: string;
	export const WINDOWID: string;
	export const WM_CFLAGS: string;
	export const MPI_ARCH_PATH: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const WM_PRECISION_OPTION: string;
	export const XDG_SESSION_CLASS: string;
	export const COLORFGBG: string;
	export const USERNAME: string;
	export const ParaView_DIR: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_cache: string;
	export const WM_COMPILER_TYPE: string;
	export const FOAM_MPI: string;
	export const WINDOWPATH: string;
	export const GTK2_RC_FILES: string;
	export const WM_COMPILER_LIB_ARCH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const DERBY_HOME: string;
	export const GDM_LANG: string;
	export const PV_PLUGIN_PATH: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const CGAL_ARCH_PATH: string;
	export const FOAM_UTILITIES: string;
	export const FOAM_SRC: string;
	export const SCOTCH_ARCH_PATH: string;
	export const WM_CXX: string;
	export const XDG_RUNTIME_DIR: string;
	export const XCURSOR_THEME: string;
	export const FOAM_USER_APPBIN: string;
	export const WM_OPTIONS: string;
	export const WM_PROJECT_VERSION: string;
	export const DISPLAY: string;
	export const FFTW_ARCH_PATH: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const FOAM_SETTINGS: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const WM_ARCH: string;
	export const SHELL: string;
	export const FOAM_LIBBIN: string;
	export const GOPATH: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const WM_OSTYPE: string;
	export const WM_CC: string;
	export const KONSOLE_DBUS_SERVICE: string;
	export const WM_COMPILER: string;
	export const GPG_AGENT_INFO: string;
	export const WM_PROJECT_INST_DIR: string;
	export const ANDROID_SDK_ROOT: string;
	export const WM_PROJECT_USER_DIR: string;
	export const QT_IM_MODULE: string;
	export const XDG_VTNR: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const JAVA_HOME: string;
	export const PWD: string;
	export const FOAM_TUTORIALS: string;
	export const npm_execpath: string;
	export const WM_MPLIB: string;
	export const WM_LABEL_SIZE: string;
	export const CLUTTER_IM_MODULE: string;
	export const ANDROID_HOME: string;
	export const NVM_CD_FLAGS: string;
	export const npm_config_global_prefix: string;
	export const FOAM_RUN: string;
	export const WM_THIRD_PARTY_DIR: string;
	export const PYTHONPATH: string;
	export const npm_command: string;
	export const WM_LABEL_OPTION: string;
	export const KDE_SESSION_UID: string;
	export const WM_CXXFLAGS: string;
	export const FOAM_SOLVERS: string;
	export const FOAM_APPBIN: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		PROFILEHOME: string;
		KDE_FULL_SESSION: string;
		BOOST_ARCH_PATH: string;
		LANGUAGE: string;
		WM_PROJECT: string;
		FOAM_SITE_LIBBIN: string;
		WM_DIR: string;
		J2SDKDIR: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		ParaView_INCLUDE_DIR: string;
		XCURSOR_SIZE: string;
		J2REDIR: string;
		KONSOLE_VERSION: string;
		SHLVL: string;
		LD_LIBRARY_PATH: string;
		npm_config_noproxy: string;
		HOME: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		npm_package_json: string;
		NVM_INC: string;
		WM_PROJECT_DIR: string;
		SHELL_SESSION_ID: string;
		GTK_RC_FILES: string;
		GTK_MODULES: string;
		WM_ARCH_OPTION: string;
		KDE_SESSION_VERSION: string;
		KONSOLE_DBUS_SESSION: string;
		FOAM_ETC: string;
		WM_COMPILE_OPTION: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		KDED_STARTED_BY_KDEINIT: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		npm_config_resolution_mode: string;
		COLORTERM: string;
		FOAM_EXT_LIBBIN: string;
		FOAM_SITE_APPBIN: string;
		FOAM_USER_LIBBIN: string;
		KONSOLE_DBUS_WINDOW: string;
		COLOR: string;
		NVM_DIR: string;
		npm_config_metrics_registry: string;
		GTK_IM_MODULE: string;
		LOGNAME: string;
		FOAM_APP: string;
		WM_LDFLAGS: string;
		GO111MODULE: string;
		WINDOWID: string;
		WM_CFLAGS: string;
		MPI_ARCH_PATH: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		WM_PRECISION_OPTION: string;
		XDG_SESSION_CLASS: string;
		COLORFGBG: string;
		USERNAME: string;
		ParaView_DIR: string;
		TERM: string;
		XDG_SESSION_ID: string;
		npm_config_cache: string;
		WM_COMPILER_TYPE: string;
		FOAM_MPI: string;
		WINDOWPATH: string;
		GTK2_RC_FILES: string;
		WM_COMPILER_LIB_ARCH: string;
		npm_config_node_gyp: string;
		PATH: string;
		DERBY_HOME: string;
		GDM_LANG: string;
		PV_PLUGIN_PATH: string;
		NODE: string;
		npm_package_name: string;
		CGAL_ARCH_PATH: string;
		FOAM_UTILITIES: string;
		FOAM_SRC: string;
		SCOTCH_ARCH_PATH: string;
		WM_CXX: string;
		XDG_RUNTIME_DIR: string;
		XCURSOR_THEME: string;
		FOAM_USER_APPBIN: string;
		WM_OPTIONS: string;
		WM_PROJECT_VERSION: string;
		DISPLAY: string;
		FFTW_ARCH_PATH: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		FOAM_SETTINGS: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		WM_ARCH: string;
		SHELL: string;
		FOAM_LIBBIN: string;
		GOPATH: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		WM_OSTYPE: string;
		WM_CC: string;
		KONSOLE_DBUS_SERVICE: string;
		WM_COMPILER: string;
		GPG_AGENT_INFO: string;
		WM_PROJECT_INST_DIR: string;
		ANDROID_SDK_ROOT: string;
		WM_PROJECT_USER_DIR: string;
		QT_IM_MODULE: string;
		XDG_VTNR: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		JAVA_HOME: string;
		PWD: string;
		FOAM_TUTORIALS: string;
		npm_execpath: string;
		WM_MPLIB: string;
		WM_LABEL_SIZE: string;
		CLUTTER_IM_MODULE: string;
		ANDROID_HOME: string;
		NVM_CD_FLAGS: string;
		npm_config_global_prefix: string;
		FOAM_RUN: string;
		WM_THIRD_PARTY_DIR: string;
		PYTHONPATH: string;
		npm_command: string;
		WM_LABEL_OPTION: string;
		KDE_SESSION_UID: string;
		WM_CXXFLAGS: string;
		FOAM_SOLVERS: string;
		FOAM_APPBIN: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
