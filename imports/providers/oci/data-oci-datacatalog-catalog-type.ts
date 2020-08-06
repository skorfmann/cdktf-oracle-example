// https://www.terraform.io/docs/providers/oci/r/data_oci_datacatalog_catalog_type.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "catalog_id": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "external_type_name": {
        "type": "string",
        "computed": true
      },
      "fields": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_approved": {
        "type": "bool",
        "computed": true
      },
      "is_internal": {
        "type": "bool",
        "computed": true
      },
      "is_tag": {
        "type": "bool",
        "computed": true
      },
      "key": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "properties": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "type_category": {
        "type": "string",
        "computed": true
      },
      "type_key": {
        "type": "string",
        "required": true
      },
      "uri": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataOciDatacatalogCatalogTypeConfig extends TerraformMetaArguments {
  readonly catalogId: string;
  readonly fields?: string[];
  readonly typeKey: string;
}

// Resource

export class DataOciDatacatalogCatalogType extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatacatalogCatalogTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_catalog_type',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._fields = config.fields;
    this._typeKey = config.typeKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId: string;
  public get catalogId() {
    return this._catalogId;
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // external_type_name - computed: true, optional: false, required: true
  public get externalTypeName() {
    return this.getStringAttribute('external_type_name');
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[];
  public get fields() {
    return this._fields;
  }
  public set fields(value: string[] | undefined) {
    this._fields = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_approved - computed: true, optional: false, required: true
  public get isApproved() {
    return this.getBooleanAttribute('is_approved');
  }

  // is_internal - computed: true, optional: false, required: true
  public get isInternal() {
    return this.getBooleanAttribute('is_internal');
  }

  // is_tag - computed: true, optional: false, required: true
  public get isTag() {
    return this.getBooleanAttribute('is_tag');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: true
  public properties(key: string): string {
    return new StringMap(this, 'properties').lookup(key);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // type_category - computed: true, optional: false, required: true
  public get typeCategory() {
    return this.getStringAttribute('type_category');
  }

  // type_key - computed: false, optional: false, required: true
  private _typeKey: string;
  public get typeKey() {
    return this._typeKey;
  }
  public set typeKey(value: string) {
    this._typeKey = value;
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      fields: this._fields,
      type_key: this._typeKey,
    };
  }
}
