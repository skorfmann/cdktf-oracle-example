// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_preauthrequest.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_type": {
        "type": "string",
        "computed": true
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
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "object": {
        "type": "string",
        "computed": true
      },
      "par_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_expires": {
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

// Configuration

export interface DataOciObjectstoragePreauthrequestConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly namespace: string;
  readonly parId: string;
}

// Resource

export class DataOciObjectstoragePreauthrequest extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstoragePreauthrequestConfig) {
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
    this._bucket = config.bucket;
    this._namespace = config.namespace;
    this._parId = config.parId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: false, required: true
  public get accessType() {
    return this.getStringAttribute('access_type');
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

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // object - computed: true, optional: false, required: true
  public get object() {
    return this.getStringAttribute('object');
  }

  // par_id - computed: false, optional: false, required: true
  private _parId: string;
  public get parId() {
    return this._parId;
  }
  public set parId(value: string) {
    this._parId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_expires - computed: true, optional: false, required: true
  public get timeExpires() {
    return this.getStringAttribute('time_expires');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      namespace: this._namespace,
      par_id: this._parId,
    };
  }
}
