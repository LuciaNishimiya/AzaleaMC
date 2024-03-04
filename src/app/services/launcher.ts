import mlc from 'minecraft-launcher-core'
export function mcLauncher(tocken): void {

    const launcher = new mlc.Client()
 const opts = {
    authorization: tocken.mclc(),
    root: './.minecraft',
    version: {
      number: '1.20.4',
      type: 'release'
    },
    memory: {
      max: '6G',
      min: '4G'
    }
  }

  launcher.launch(opts)

  launcher.on('debug', (e) => console.log(e))
  launcher.on('data', (e) => console.log(e))
}