import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminAzurebridge implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Azurebridge',
                name: 'N8nDevAzureAzsadminAzurebridge',
                icon: { light: 'file:./azure-azsadmin-azurebridge.png', dark: 'file:./azure-azsadmin-azurebridge.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'AzureBridge Admin Client.',
                defaults: { name: 'Azure Azsadmin Azurebridge' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminAzurebridgeApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
