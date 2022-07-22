/**
 * @type {import('@types/aws-lambda').PreSignUpTriggerHandler}
 */
exports.handler = async event => {
  // allowed domains
  const ald = process.env.DOMAINALLOWLIST.split(',').map(d => d.trim());

  const { email } = event.request.userAttributes;

  console.log('email', email);
  const domain = email.substring(email.indexOf('@') + 1);
  const name = email.substring(0, email.indexOf('@'));
  console.log('name', name);

  if (!ald.includes(domain)) {
    throw new Error(`Invalid email domain: ${domain}`);
  }

  let namesArray = ["josefai", "ykethan"];
  if(namesArray.includes(name)) {
    return event;
  }
  else{
    throw new Error(`Access denied for: ${name} please reach out to the admin for access`);
  }
};
