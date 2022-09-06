interface Commnad {
  execute(): void;
}

class Reciver {
  public doSomething(a: string): void {
    console.log(`Reciver: working on (${a})`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Reciver: Also working on (${b})`);
  }
}

class SimpleCommand implements Commnad {
  private payload: string;

  constructor(p: string) {
    this.payload = p;
  }

  execute(): void {
    console.log(
      `SimpleCommand: I can do simple things like printing (${this.payload})`
    );
  }
}

class ComplexCommand implements Commnad {
  private reciver: Reciver;

  private a: string;
  private b: string;

  constructor(reciver: Reciver, a: string, b: string) {
    this.reciver = reciver;
    this.a = a;
    this.b = b;
  }

  execute(): void {
    console.log(
      "ComplexCommand: Complex stuff should be done by a receiver object."
    );
    this.reciver.doSomething(this.a);
    this.reciver.doSomethingElse(this.b);
  }
}

class Invoker {
  private onStart: Commnad;

  private onFinish: Commnad;

  constructor(onStartCommand: Commnad, onFinishCommand: Commnad) {
    this.onStart = onStartCommand;
    this.onFinish = onFinishCommand;
  }

  public setOnFinish(command: Commnad): void {
    this.onFinish = command;
  }

  public doSomethingImportant(): void {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: Commnad): object is Commnad {
    return object.execute !== undefined;
  }
}
const simpleCommand = new SimpleCommand("Hi Nir");
const receiver = new Reciver();
const complexCommand = new ComplexCommand(
  receiver,
  "Send email",
  "Send report"
);
const invoker = new Invoker(simpleCommand, complexCommand);

invoker.doSomethingImportant();
