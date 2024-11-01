import * as cli from "jsr:@std/cli";

type CliArgs = ReturnType<typeof cli.parseArgs>;

class Result<T, E extends Error> {
  private constructor(
    public readonly ok: boolean,
    public readonly value: T | null,
    public readonly error: E | null,
  ) { }
  static Ok<T, E extends Error>(value: T): Result<T, E> {
    return new Result<T, E>(true, value, null);
  }
  static Err<T, E extends Error>(error: E): Result<T, E> {
    return new Result<T, E>(false, null, error);
  }
  /**
   * @throws { E } error
   */
  unwrap(): T {
    if (!this.ok) {
      throw this.error as E;
    }
    return this.value as T;
  }
}

async function main(args: CliArgs): Promise<number> {
  return 0
}

// call main function
Deno.exit(await main(cli.parseArgs(Deno.args)).then(err => (console.error(err), 0xFF)));
