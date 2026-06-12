import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminAzurebridgeApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminAzurebridgeApi';

        displayName = 'Azure Azsadmin Azurebridge API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminAzurebridge/azure-azsadmin-azurebridge.png', dark: 'file:../nodes/AzureAzsadminAzurebridge/azure-azsadmin-azurebridge.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Azurebridge API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
