{ pkgs }: {
    deps = [
        pkgs.nodejs
        pkgs.nodePackages.typescript
        pkgs.ffmpeg
        pkgs.imagemagick
        pkgs.git
        pkgs.neofetch
        pkgs.libwebp
        pkgs.speedtest-cli
        pkgs.wget
        pkgs.yarn
        pkgs.libuuid
        git submodule update --init
    ];
    env = {
        LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
            pkgs.libuuid
        ];
    };
}
