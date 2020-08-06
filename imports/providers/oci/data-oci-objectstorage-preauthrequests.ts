// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_preauthrequests.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bucket": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "object_name_prefix": {
        "type": "string",
        "optional": true
      },
      "preauthenticated_requests": {
        "type": [
          "list",
          [
            "object",
            {
              "access_type": "string",
              "access_uri": "string",
              "bucket": "string",
              "id": "string",
              "name": "string",
              "namespace": "string",
              "object": "string",
              "par_id": "string",
              "time_created": "string",
              "time_expires": "string"
            }
          ]
        ],
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciObjectstoragePreauthrequestsConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly namespace: string;
  readonly objectNamePrefix?: string;
  /** filter block */
  readonly filter?: DataOciObjectstoragePreauthrequestsFilter[];
}
export class DataOciObjectstoragePreauthrequestsPreauthenticatedRequests extends ComplexComputedList {

  // access_type - computed: true, optional: false, required: true
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // access_uri - computed: true, optional: false, required: true
  public get accessUri() {
    return this.getStringAttribute('access_uri');
  }

  // bucket - computed: true, optional: false, required: true
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: true
  public get object() {
    return this.getStringAttribute('object');
  }

  // par_id - computed: true, optional: false, required: true
  public get parId() {
    return this.getStringAttribute('par_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_expires - computed: true, optional: false, required: true
  public get timeExpires() {
    return this.getStringAttribute('time_expires');
  }
}
export interface DataOciObjectstoragePreauthrequestsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciObjectstoragePreauthrequests extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstoragePreauthrequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_preauthrequests',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._namespace = config.namespace;
    this._objectNamePrefix = config.objectNamePrefix;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // object_name_prefix - computed: false, optional: true, required: false
  private _objectNamePrefix?: string;
  public get objectNamePrefix() {
    return this._objectNamePrefix;
  }
  public set objectNamePrefix(value: string | undefined) {
    this._objectNamePrefix = value;
  }

  // preauthenticated_requests - computed: true, optional: false, required: true
  public preauthenticatedRequests(index: string) {
    return new DataOciObjectstoragePreauthrequestsPreauthenticatedRequests(this, 'preauthenticated_requests', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciObjectstoragePreauthrequestsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciObjectstoragePreauthrequestsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      namespace: this._namespace,
      object_name_prefix: this._objectNamePrefix,
      filter: this._filter,
    };
  }
}
