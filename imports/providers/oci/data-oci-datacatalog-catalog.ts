// https://www.terraform.io/docs/providers/oci/r/data_oci_datacatalog_catalog.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "attached_catalog_private_endpoints": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "catalog_id": {
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
      "number_of_objects": {
        "type": "number",
        "computed": true
      },
      "service_api_url": {
        "type": "string",
        "computed": true
      },
      "service_console_url": {
        "type": "string",
        "computed": true
      },
      "state": {
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

export interface DataOciDatacatalogCatalogConfig extends TerraformMetaArguments {
  readonly catalogId: string;
}

// Resource

export class DataOciDatacatalogCatalog extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatacatalogCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_catalog',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_catalog_private_endpoints - computed: true, optional: false, required: true
  public get attachedCatalogPrivateEndpoints() {
    return this.getListAttribute('attached_catalog_private_endpoints');
  }

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId: string;
  public get catalogId() {
    return this._catalogId;
  }
  public set catalogId(value: string) {
    this._catalogId = value;
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

  // number_of_objects - computed: true, optional: false, required: true
  public get numberOfObjects() {
    return this.getNumberAttribute('number_of_objects');
  }

  // service_api_url - computed: true, optional: false, required: true
  public get serviceApiUrl() {
    return this.getStringAttribute('service_api_url');
  }

  // service_console_url - computed: true, optional: false, required: true
  public get serviceConsoleUrl() {
    return this.getStringAttribute('service_console_url');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
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
      catalog_id: this._catalogId,
    };
  }
}
