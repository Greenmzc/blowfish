# Forms

## state

```javascript
{
  fields: [
    {
      index: 0,
      value: 'hello',
      isValid: true,
      visited: true,
    },
    {
      index: 1,
      value: '',
      isValid: false,
      visited: true
    }
  ]
}
```

## usage

```javascript
const { Form, Field } = require('components/form');

render() {
  return (
    <Form>
      <Field label="email" />
    </Form>
  );
}
```
