// https://www.terraform.io/docs/providers/oci/r/objectstorage_preauthrequest.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_type": {
        "type": "string",
        "required": true
      },
      "access_uri": {
        "type": "string",
        "computed": true
      },
      "bucket": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "object": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "par_id": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_expires": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ObjectstoragePreauthrequestConfig extends TerraformMetaArguments {
  readonly accessType: string;
  readonly bucket: string;
  readonly name: string;
  readonly namespace: string;
  readonly object?: string;
  readonly timeExpires: string;
  /** timeouts block */
  readonly timeouts?: ObjectstoragePreauthrequestTimeouts;
}
export interface ObjectstoragePreauthrequestTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ObjectstoragePreauthrequest extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ObjectstoragePreauthrequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_preauthrequest',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessType = config.accessType;
    this._bucket = config.bucket;
    this._name = config.name;
    this._namespace = config.namespace;
    this._object = config.object;
    this._timeExpires = config.timeExpires;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: false, required: true
  private _accessType: string;
  public get accessType() {
    return this._accessType;
  }
  public set accessType(value: string) {
    this._accessType = value;
  }

  // access_uri - computed: true, optional: false, required: true
  public get accessUri() {
    return this.getStringAttribute('access_uri');
  }

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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string;
  public get object() {
    return this._object ?? this.getStringAttribute('object');
  }
  public set object(value: string | undefined) {
    this._object = value;
  }

  // par_id - computed: true, optional: false, required: true
  public get parId() {
    return this.getStringAttribute('par_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_expires - computed: false, optional: false, required: true
  private _timeExpires: string;
  public get timeExpires() {
    return this._timeExpires;
  }
  public set timeExpires(value: string) {
    this._timeExpires = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ObjectstoragePreauthrequestTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ObjectstoragePreauthrequestTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: this._accessType,
      bucket: this._bucket,
      name: this._name,
      namespace: this._namespace,
      object: this._object,
      time_expires: this._timeExpires,
      timeouts: this._timeouts,
    };
  }
}
