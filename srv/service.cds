using { TableExport as my } from '../db/schema.cds';

@path : '/service/TableExport'
service TableExport
{
    @odata.draft.enabled
    entity SrvProjection as
        projection on my.Creation
        actions{
            action priorityDelivery(priority:Integer);

        };

}


annotate TableExport with @requires :
[
    'authenticated-user'
];
