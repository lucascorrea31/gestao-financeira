import { HttpRequest } from '@/plugins/http';

describe('HTTP methods test', () => {

  it('get test', async () => {
    HttpRequest.get('https://jsonplaceholder.typicode.com/todos/1')
  })

  it('post test', async () => {
    HttpRequest.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
  })

  it('put test', async () => {
    HttpRequest.put('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    })
  })

  it('patch test', async () => {
    HttpRequest.patch('https://jsonplaceholder.typicode.com/posts/1', {
      title: 'foo'
    })
  })

  it('delete test', async () => {
    HttpRequest.delete('https://jsonplaceholder.typicode.com/posts/1')
  })
})