using TableExport as service from '../../srv/service';
annotate service.SrvProjection with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Category',
                Value : Category,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Priority',
                Value : Priority,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Department',
                Value : Department,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ProductName',
                Value : ProductName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DeliveryDate',
                Value : DeliveryDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Cost',
                Value : Cost,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Category',
            Value : Category,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Priority',
            Value : Priority,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Department',
            Value : Department,
        },
        {
            $Type : 'UI.DataField',
            Label : 'ProductName',
            Value : ProductName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'DeliveryDate',
            Value : DeliveryDate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
         {
            $Type : 'UI.DataField',
            Label : 'Cost',
            Value : Cost,
        },
    ],
);

