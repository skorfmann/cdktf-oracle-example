// https://www.terraform.io/docs/providers/oci/r/data_oci_metering_computation_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "items": {
        "type": [
          "list",
          [
            "object",
            {
              "key": "string",
              "values": [
                "list",
                "string"
              ]
            }
          ]
        ],
        "computed": true
      },
      "tenant_id": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciMeteringComputationConfigurationConfig extends TerraformMetaArguments {
  readonly tenantId: string;
}
export class DataOciMeteringComputationConfigurationItems extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}

// Resource

export class DataOciMeteringComputationConfiguration extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMeteringComputationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // items - computed: true, optional: false, required: true
  public items(index: string) {
    return new DataOciMeteringComputationConfigurationItems(this, 'items', index);
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId: string;
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tenant_id: this._tenantId,
    };
  }
}
