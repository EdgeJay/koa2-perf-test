export default class RoutesController {
  static async getHelloWorld(ctx) {
    ctx.body = 'Hello world!';
  }

  // eslint-disable-next-line class-methods-use-this
  async getHelloWorld(ctx) {
    ctx.body = 'Hello world!';
  }
}
