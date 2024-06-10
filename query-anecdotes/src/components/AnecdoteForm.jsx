import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'
import { useNotificationDispatch } from '../NotificationContext'
const AnecdoteForm = () => {
  const queryClient=useQueryClient()
  const dispatch=useNotificationDispatch()

  const newAnecdoteMutation=useMutation({
    mutationFn: createAnecdote,
    onSuccess: () =>{
      queryClient.invalidateQueries({ queryKey: ['anecdotes']})
    },
    onError: ()=>{
      dispatch({type: 'SET', payload: `too short anecdote, must have length 5 or more`})
      setTimeout(()=> dispatch({type: 'SET', payload: null}), 5000)
    }
  })
  //(newAnecdote) =>createAnecdote(newAnecdote)
  //(updatedAnecdote) => updateAnecdote(updatedAnecdote),
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote={ content, votes: 0 }
    newAnecdoteMutation.mutate(newAnecdote)
    dispatch({type: 'SET', payload: `anecdote ${content} created`})
    setTimeout(()=> dispatch({type: 'SET', payload: null}), 5000)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
