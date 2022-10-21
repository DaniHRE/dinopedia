{ pkgs ? import <nixpkgs> {} }: with pkgs;

let
  pythonEnv = python3.withPackages(ps: []);

in
  mkShell {
    buildInputs = [
      python310Packages.django
      python310Packages.djangorestframework
    ];
  }