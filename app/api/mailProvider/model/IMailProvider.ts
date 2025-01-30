export default interface IMailProvider {
  sendMail(html: string): Promise<void>;
}
