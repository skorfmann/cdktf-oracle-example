// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_region_subscriptions.html
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
      "region_subscriptions": {
        "type": [
          "list",
          [
            "object",
            {
              "is_home_region": "bool",
              "region_key": "string",
              "region_name": "string",
              "state": "string",
              "tenancy_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "tenancy_id": {
        "type": "string",
        "required": true
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

export interface DataOciIdentityRegionSubscriptionsConfig extends TerraformMetaArguments {
  readonly tenancyId: string;
  /** filter block */
  readonly filter?: DataOciIdentityRegionSubscriptionsFilter[];
}
export class DataOciIdentityRegionSubscriptionsRegionSubscriptions extends ComplexComputedList {

  // is_home_region - computed: true, optional: false, required: true
  public get isHomeRegion() {
    return this.getBooleanAttribute('is_home_region');
  }

  // region_key - computed: true, optional: false, required: true
  public get regionKey() {
    return this.getStringAttribute('region_key');
  }

  // region_name - computed: true, optional: false, required: true
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenancy_id - computed: true, optional: false, required: true
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
}
export interface DataOciIdentityRegionSubscriptionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityRegionSubscriptions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityRegionSubscriptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_region_subscriptions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tenancyId = config.tenancyId;
    this._filter = config.filter;
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

  // region_subscriptions - computed: true, optional: false, required: true
  public regionSubscriptions(index: string) {
    return new DataOciIdentityRegionSubscriptionsRegionSubscriptions(this, 'region_subscriptions', index);
  }

  // tenancy_id - computed: false, optional: false, required: true
  private _tenancyId: string;
  public get tenancyId() {
    return this._tenancyId;
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityRegionSubscriptionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityRegionSubscriptionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tenancy_id: this._tenancyId,
      filter: this._filter,
    };
  }
}
