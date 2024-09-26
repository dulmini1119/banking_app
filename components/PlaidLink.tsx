import React, { useCallback, useEffect, useState } from 'react'
import {PlaidLinkOptions} from 'react-plaid-link'

const PlaidLink = ({user, variant} : PlaidLinkProps) => {

    const [token,setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);
        }

        getLinkToken();
    }, [])

    const onSuccess = useCallback( async () => {

    }, [user])

    const config : PlaidLinkOptions = {
        token,
        onSuccess
    }

  return (
    <div>PlaidLink</div>
  )
}

export default PlaidLink