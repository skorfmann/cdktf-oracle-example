// https://www.terraform.io/docs/providers/oci/r/data_oci_data_safe_data_safe_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_enabled": {
        "type": "string",
        "computed": true
      },
      "url": {
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

export interface DataOciDataSafeDataSafeConfigurationConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
}

// Resource

export class DataOciDataSafeDataSafeConfiguration extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDataSafeDataSafeConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_data_safe_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_enabled - computed: true, optional: false, required: true
  public get timeEnabled() {
    return this.getStringAttribute('time_enabled');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
    };
  }
}
