// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_namespace_metadata.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "default_s3compartment_id": {
        "type": "string",
        "computed": true
      },
      "default_swift_compartment_id": {
        "type": "string",
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciObjectstorageNamespaceMetadataConfig extends TerraformMetaArguments {
  readonly namespace: string;
}

// Resource

export class DataOciObjectstorageNamespaceMetadata extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstorageNamespaceMetadataConfig) {
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
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_s3compartment_id - computed: true, optional: false, required: true
  public get defaultS3CompartmentId() {
    return this.getStringAttribute('default_s3compartment_id');
  }

  // default_swift_compartment_id - computed: true, optional: false, required: true
  public get defaultSwiftCompartmentId() {
    return this.getStringAttribute('default_swift_compartment_id');
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      namespace: this._namespace,
    };
  }
}
