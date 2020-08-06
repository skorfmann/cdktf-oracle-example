// https://www.terraform.io/docs/providers/oci/r/objectstorage_namespace_metadata.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "default_s3compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "default_swift_compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "namespace": {
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

export interface ObjectstorageNamespaceMetadataConfig extends TerraformMetaArguments {
  readonly defaultS3CompartmentId?: string;
  readonly defaultSwiftCompartmentId?: string;
  readonly namespace: string;
  /** timeouts block */
  readonly timeouts?: ObjectstorageNamespaceMetadataTimeouts;
}
export interface ObjectstorageNamespaceMetadataTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ObjectstorageNamespaceMetadata extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ObjectstorageNamespaceMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_namespace_metadata',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultS3CompartmentId = config.defaultS3CompartmentId;
    this._defaultSwiftCompartmentId = config.defaultSwiftCompartmentId;
    this._namespace = config.namespace;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_s3compartment_id - computed: true, optional: true, required: false
  private _defaultS3CompartmentId?: string;
  public get defaultS3CompartmentId() {
    return this._defaultS3CompartmentId ?? this.getStringAttribute('default_s3compartment_id');
  }
  public set defaultS3CompartmentId(value: string | undefined) {
    this._defaultS3CompartmentId = value;
  }

  // default_swift_compartment_id - computed: true, optional: true, required: false
  private _defaultSwiftCompartmentId?: string;
  public get defaultSwiftCompartmentId() {
    return this._defaultSwiftCompartmentId ?? this.getStringAttribute('default_swift_compartment_id');
  }
  public set defaultSwiftCompartmentId(value: string | undefined) {
    this._defaultSwiftCompartmentId = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ObjectstorageNamespaceMetadataTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ObjectstorageNamespaceMetadataTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_s3compartment_id: this._defaultS3CompartmentId,
      default_swift_compartment_id: this._defaultSwiftCompartmentId,
      namespace: this._namespace,
      timeouts: this._timeouts,
    };
  }
}
