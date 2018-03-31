import { join, normalize, Path, strings } from '@angular-devkit/core';
import { apply, mergeWith, move, Rule, template, url } from '@angular-devkit/schematics';
import { Location, NameParser } from '../utils/name.parser';
import { ExceptionOptions } from './schema';

export function main(options: ExceptionOptions): Rule {
  options = transform(options);
  return mergeWith(generate(options));
}

function transform(source: ExceptionOptions): ExceptionOptions {
  let target: ExceptionOptions = Object.assign({}, source);
  target.path = target.path !== undefined ? join(normalize('src'), target.path) : normalize('src');
  const location: Location = new NameParser().parse(target);
  target.name = strings.dasherize(location.name);
  target.path = location.path;
  return target;
}

function generate(options: ExceptionOptions) {
  return apply(
    url('./files'), [
      template({
        ...strings,
        ...options
      }),
      move(join(options.path as Path, options.name))
    ]
  );
}
