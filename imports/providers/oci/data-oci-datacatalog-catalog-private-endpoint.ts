// https://www.terraform.io/docs/providers/oci/r/data_oci_datacatalog_catalog_private_endpoint.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "attached_catalogs": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "catalog_private_endpoint_id": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "dns_zones": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
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

export interface DataOciDatacatalogCatalogPrivateEndpointConfig extends TerraformMetaArguments {
  readonly catalogPrivateEndpointId: string;
}

// Resource

export class DataOciDatacatalogCatalogPrivateEndpoint extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatacatalogCatalogPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_catalog_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogPrivateEndpointId = config.catalogPrivateEndpointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_catalogs - computed: true, optional: false, required: true
  public get attachedCatalogs() {
    return this.getListAttribute('attached_catalogs');
  }

  // catalog_private_endpoint_id - computed: false, optional: false, required: true
  private _catalogPrivateEndpointId: string;
  public get catalogPrivateEndpointId() {
    return this._catalogPrivateEndpointId;
  }
  public set catalogPrivateEndpointId(value: string) {
    this._catalogPrivateEndpointId = value;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_zones - computed: true, optional: false, required: true
  public get dnsZones() {
    return this.getListAttribute('dns_zones');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_private_endpoint_id: this._catalogPrivateEndpointId,
    };
  }
}
