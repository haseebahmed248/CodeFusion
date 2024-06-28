import { VM } from 'vm2';

export const codeRunner = async (req, res) => {
  const { code } = req.body;
  let logOutput = [];
  const customConsole = {
    log: (...args) => {
      logOutput.push(args.join(' '));
    }
  };

  try {
    const vm = new VM({
      timeout: 1000,
      sandbox: { console: customConsole },
    });

    vm.run(code);
    
    res.send( logOutput );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



export const test = (req, res) => {
    res.send("Hello");
};

